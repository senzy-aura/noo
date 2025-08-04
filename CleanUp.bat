@echo off
echo.
echo ================================
echo    Windows Cleanup Script
echo ================================
echo.

:: Run as admin check
net session >nul 2>&1
if %errorlevel% neq 0 (
    echo Please run this script as Administrator.
    pause
    exit /b
)

:: Clear TEMP folders
echo Cleaning temporary files...
del /s /f /q "%TEMP%\*.*"
del /s /f /q "C:\Windows\Temp\*.*"

:: Clear Prefetch (optional)
echo Cleaning Prefetch files...
del /s /f /q "C:\Windows\Prefetch\*.*"

:: Empty Recycle Bin
echo Emptying Recycle Bin...
powershell.exe -command "Clear-RecycleBin -Force"

:: Flush DNS cache
echo Flushing DNS cache...
ipconfig /flushdns

:: Clear clipboard
echo Clearing clipboard...
echo off | clip

echo.
echo Cleanup complete!
pause
