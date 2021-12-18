import os
clear = lambda: os.system('cls')

num1 = int(input("Digite o primeiro número: "))
op = str(input("\nEscolha o operador: +,-,*,/ ?: "))
num2 = int(input("\nDigite o segundo número: "))

if op=='+':
    calc=num1+num2
    print("\nA soma de",num1,op,num2,"é:",calc)

elif op=='-':
    calc=num1-num2
    print("\nA subtração de",num1,op,num2,"é:",calc)

elif op=='*':
    calc = num1 * num2
    print("\nA multiplicação de", num1,op, num2, "é:", calc)

elif op=='/':
    calc = num1 / num2
    print("\nA divisão de", num1,op, num2, "é:", calc)

else:
    print("\n#### Operador Inválido ###")
