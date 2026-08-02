@echo off
REM Double-click this after replacing public\cv.pdf to publish the new CV.
cd /d "%~dp0"

if not exist "public\cv.pdf" (
  echo.
  echo   ERROR: public\cv.pdf not found.
  echo   Put your CV there, named exactly cv.pdf, then run this again.
  echo.
  pause
  exit /b 1
)

echo.
echo   Publishing public\cv.pdf ...
echo.

git add public/cv.pdf

git diff --cached --quiet
if %errorlevel%==0 (
  echo   Nothing to publish - the CV on the site is already this file.
  echo.
  pause
  exit /b 0
)

git commit -m "Update CV"
if errorlevel 1 goto failed

git push origin main
if errorlevel 1 goto failed

echo.
echo   Done. GitHub is rebuilding the site now - it goes live in about a minute.
echo   https://abdulrahimanmihad.github.io/portfolio/
echo.
pause
exit /b 0

:failed
echo.
echo   Something went wrong above. Read the message, or ask Claude Code.
echo.
pause
exit /b 1
