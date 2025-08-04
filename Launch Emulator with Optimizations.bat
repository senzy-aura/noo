:: launch_emulator_boosted.bat
@echo off
echo Setting High Performance...
powercfg -setactive SCHEME_MIN

echo Killing unwanted processes...
taskkill /f /im explorer.exe
taskkill /f /im OneDrive.exe
taskkill /f /im XboxGameBar.exe

echo Launching BlueStacks...
start "" "C:\Program Files\BlueStacks_nxt\HD-Player.exe"
