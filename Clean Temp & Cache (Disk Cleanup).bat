:: clean_temp.bat
del /q /f /s %TEMP%\*
del /q /f /s C:\Windows\Temp\*
cleanmgr /sagerun:1
