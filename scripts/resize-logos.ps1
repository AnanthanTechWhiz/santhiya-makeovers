$ErrorActionPreference = 'Stop'
Add-Type -AssemblyName System.Drawing

function Resize-Png {
    param([string]$src, [string]$dest, [int]$maxWidth)
    $bytes = [System.IO.File]::ReadAllBytes($src)
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $img = [System.Drawing.Image]::FromStream($ms)
    $ratio = [Math]::Min(1.0, [double]$maxWidth / [double]$img.Width)
    $w = [int]($img.Width * $ratio)
    $h = [int]($img.Height * $ratio)
    $bmp = New-Object -TypeName System.Drawing.Bitmap -ArgumentList @($w, $h, [System.Drawing.Imaging.PixelFormat]::Format32bppArgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()
    $img.Dispose()
    $ms.Dispose()
    $tmp = "$dest.tmp"
    $bmp.Save($tmp, [System.Drawing.Imaging.ImageFormat]::Png)
    $bmp.Dispose()
    Move-Item -Force $tmp $dest
    Write-Output "$([System.IO.Path]::GetFileName($dest)) : $w x $h, $([Math]::Round((Get-Item $dest).Length/1KB,1)) KB"
}

function Resize-Jpeg {
    param([string]$src, [string]$dest, [int]$maxWidth, [int]$quality = 85)
    $bytes = [System.IO.File]::ReadAllBytes($src)
    $ms = New-Object System.IO.MemoryStream(,$bytes)
    $img = [System.Drawing.Image]::FromStream($ms)
    $ratio = [Math]::Min(1.0, [double]$maxWidth / [double]$img.Width)
    $w = [int]($img.Width * $ratio)
    $h = [int]($img.Height * $ratio)
    $bmp = New-Object -TypeName System.Drawing.Bitmap -ArgumentList @($w, $h, [System.Drawing.Imaging.PixelFormat]::Format24bppRgb)
    $g = [System.Drawing.Graphics]::FromImage($bmp)
    $g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
    $g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
    $g.Clear([System.Drawing.Color]::White)
    $g.DrawImage($img, 0, 0, $w, $h)
    $g.Dispose()
    $img.Dispose()
    $ms.Dispose()

    $jpegCodec = [System.Drawing.Imaging.ImageCodecInfo]::GetImageEncoders() | Where-Object { $_.MimeType -eq 'image/jpeg' }
    $encParams = New-Object System.Drawing.Imaging.EncoderParameters(1)
    $encParams.Param[0] = New-Object System.Drawing.Imaging.EncoderParameter([System.Drawing.Imaging.Encoder]::Quality, [int64]$quality)
    $tmp = "$dest.tmp"
    $bmp.Save($tmp, $jpegCodec, $encParams)
    $bmp.Dispose()
    Move-Item -Force $tmp $dest
    Write-Output "$([System.IO.Path]::GetFileName($dest)) : $w x $h, $([Math]::Round((Get-Item $dest).Length/1KB,1)) KB"
}

$base = "d:\04_SOFTWARE DEVELOPMENT\Apps\santhiya-makeovers"
$down = "$env:USERPROFILE\Downloads"

Resize-Png "$down\santhiya-icon-social-media.png" "$base\src\assets\logo-icon.png" 320
Resize-Jpeg "$down\santhiya-icon.png" "$base\src\assets\logo-portrait.jpg" 600 85
Resize-Png "$down\santhiya-latest-logo-without-background.png" "$base\src\assets\logo-horizontal-transparent.png" 600
Resize-Jpeg "$down\Santhiya-logo-with-background.png" "$base\src\assets\logo-horizontal-white.jpg" 1000 85
Resize-Png "$down\santhiya-icon-social-media.png" "$base\public\favicon.png" 180
Resize-Jpeg "$down\Santhiya-logo-with-background.png" "$base\public\og-image.jpg" 1200 82

Remove-Item -Force "$base\src\assets\logo-portrait.png" -ErrorAction SilentlyContinue
Remove-Item -Force "$base\src\assets\logo-horizontal-white.png" -ErrorAction SilentlyContinue
Remove-Item -Force "$base\public\og-image.png" -ErrorAction SilentlyContinue
