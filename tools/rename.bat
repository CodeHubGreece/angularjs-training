forfiles /p ..\my-app\app /S /M *.js /C "cmd /c rename @file @fname.ts"
