#!/bin/bash
erro=0

if [ "$#" -ne 1 ]
	then
 		echo "ERRO!!! O certo é $0 caractere"
 		erro=1
fi
 
case $1 in
 		?) ;;
 		*) echo "ERRO!!! O parametro passado só pode ter um caractere."
 		erro=2
 		;;
esac
 
if [ "$erro" -ne 0 ]
 	then
 		exit $erro
fi
 
 
case $1 in
 
 		[a-z]) echo "Letra minuscula!!!"
 		;;
 
 		[A-Z]) echo "Letra maiuscula!!!"
 		;;
 
 		[0-9]) echo "Numero!!!"
 		;;
 
 		*) echo "Caracter especial!"
 		;;
 
esac
