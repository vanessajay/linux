#!/bin/bash
echo "Lista completa dos usuários do sistema"
awk -F : ' $3 > 999 {print $1}' /etc/passwd | sort | more
echo "O sistema possui `awk -F : ' $3 > 999 {print $1}' /etc/passwd | wc -l` usuários."


