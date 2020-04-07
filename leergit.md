para iniciar un nuevo proyecto solo se realiza una vez
git init
-----------------
git add [nombrearchivo]    ( se puede decir de esta manera o de todos los archivos mediante)
git add .               (marca todos los archivos para guardar)

para que los archivos no tomen encuenta algunas  librerias que siempre se usa y que no
debemos subir al repo por cuestiones de version, librerias cambios etc se crea un archivo llamado
.gitignorete archivo le pasamos el nombre de la carpeta a ignorar

--------------------------
git status -s
muestra a los estados de los archivos add en para su envio al local
--------------------------
git commit -m "mensaje"  
es par aenviar al repo local de todos los archivos marcados con el comando git add 
es necesario poner un mensaje o comentario de los cambios que se ha realizado
-------------------------
Creamos un nuevo repositorio en la nube en esta caso sera en github lo cuales pasamos el parametro
de todas maneras esta parte esta en el mismo repositorio de github al momento de crearlo
git remote add origin https://github.com/gians96/b-node-example.git
--------------------------

para enviar al repositorio de github
git push -u origin master

-------------------------
la segunda vez para enviar a github
git push 