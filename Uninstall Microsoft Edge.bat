@echo off
cd %PROGRAMFILES(X86)%\Microsoft\Edge\Application

for /f %%i in ('dir /b') do (
    cd %PROGRAMFILES(X86)%\Microsoft\Edge\Application\%%i\Installer
    setup.exe --uninstall --force-uninstall --system-level
)

echo Microsoft Edge has been force uninstalled (if present).
pause
