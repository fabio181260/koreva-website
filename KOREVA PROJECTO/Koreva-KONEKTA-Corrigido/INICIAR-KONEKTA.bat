@echo off
setlocal
cd /d "%~dp0"
start "KONEKTA - servidor local" cmd /k "py -m http.server 8765"
timeout /t 2 /nobreak >nul
start "" "http://127.0.0.1:8765/konekta/index.html"
echo.
echo KONEKTA esta a correr em http://127.0.0.1:8765/konekta/
echo Mantenha a janela do servidor aberta enquanto testa os paineis.
echo Para terminar, feche a janela do servidor.
endlocal
