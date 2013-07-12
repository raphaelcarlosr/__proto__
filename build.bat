@echo off
rem IF %1==Debug set Debug=1

set ProjectRoot=C:\Users\raphaelcarlosr\Documents\GitHub\__proto__
set BuildFolder=C:\Users\raphaelcarlosr\Documents\GitHub\build
set extDocXml=%BuildFolder%\doc.xml
set extDocTemplate=%BuildFolder%\template\template.xml
set extOutputFolder=%ProjectRoot%\docs
set jsFolder=%ProjectRoot%
set jsSourceFolder=%jsFolder%
set jsMinFolder=%jsFolder%

rem IF %Debug%==1 GOTO Compilar 

:RemoverDocumentacao
echo Removendo Documentacao antiga
@cd\
@cd %extOutputFolder%
@del %extOutputFolder%\* /F /S /Q
@cd\

:CriarDocumentacao
echo Gerando documentacao
@java -jar %BuildFolder%\ext-doc.jar -p %extDocXml% -o %extOutputFolder% -t %extDocTemplate%  -s %ProjectRoot%\*.js -verbose

:CompilarJs
echo Compilando arquivos javascript

echo __proto__.js
java -jar %BuildFolder%\compiler.jar --js_output_file=%jsMinFolder%\__proto__.min.js --js=%jsSourceFolder%\__proto__.js 

:Fim
echo Build completo

@pause