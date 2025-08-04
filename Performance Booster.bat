:: boost_performance.bat
powercfg -setactive SCHEME_MIN  :: Set to High Performance
sc stop "SysMain"
sc stop "XblGameSave"
echo Y | PowerShell.exe -command "[System.GC]::Collect()"
