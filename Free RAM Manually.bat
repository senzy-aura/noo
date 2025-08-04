:: free_ram.bat
%windir%\system32\rundll32.exe advapi32.dll,ProcessIdleTasks
PowerShell.exe -Command "[System.GC]::Collect()"
