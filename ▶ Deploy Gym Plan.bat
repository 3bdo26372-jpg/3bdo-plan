@echo off
cd /d "%~dp0"
echo ================================================
echo  Deploying 7-Day Gym Plan to GitHub Pages...
echo ================================================
echo.
git status --short
echo.
set /p MSG=Describe your change (Enter for "Update gym plan"): 
if "%MSG%"=="" set MSG=Update gym plan
git add -A
git commit -m "%MSG%"
git push origin main
echo.
echo ================================================
echo  Done! GitHub Actions is now building...
echo  Your link will be live in ~2 minutes at:
echo  https://3bdo26372-jpg.github.io/3bdo-plan/
echo ================================================
echo.
pause
