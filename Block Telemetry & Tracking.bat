:: block_tracking.bat
sc stop DiagTrack
sc stop dmwappushservice
reg add "HKLM\SOFTWARE\Policies\Microsoft\Windows\DataCollection" /v AllowTelemetry /t REG_DWORD /d 0 /f
