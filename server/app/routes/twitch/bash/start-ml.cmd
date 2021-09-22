@echo off

set idUser=%1

echo parametres : id_user %idUser%

cd ../
cd ../
cd ../
cd ../
cd ../

echo Copie de l'application dans %aicut%\ai-server-%idUser%...

mkdir "%~dp1\ai-server-%idUser%"
xcopy /y /s /q "%~dp1\ai-server" "%~dp1\ai-server-%idUser%"
cd "%~dp1\ai-server-%idUser%"

echo Installation des dépendances...
call npm ci

echo Lancement de l'instance...
call node app.js %idUser%

