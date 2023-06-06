entrada = str(input())

tabuleiro = [
    ['. . # . #'],
    ['# . . . .'],
    ['. . . # .'],
    ['# . . . .'],
    ['. . . # .'],
]

def mostrarTabuleiro():
    for i in tabuleiro:
        print(i[0])

def checarLinha(): ...

if (len(entrada)>0 ):
    tot_NaviosDestruidos = 0
    
    matriz = entrada.split(' ')
    linhas = int(matriz[0])
    colunas = int(matriz[1])
    
    posicoesDosDisparos = []
    caracteresSeparados = []

    mostrarTabuleiro()
    disparos = int(input())
    
    for i in range(disparos):
        posicoes = str(input())
        posicoesDosDisparos.append((posicoes.split(' ')))
    
    print('Localização dos disparos[Linha e coluna do impacto]')
    print(posicoesDosDisparos)
    
    print('\nCaracteres do tabuleiro')
    for l in tabuleiro:
        caracteresSeparados.append(l[0].split(' '))
    

    for i in range(0, len(caracteresSeparados)):
        for p in range(0, len(caracteresSeparados[i])):
            # print('pos: ',p,', valor: ',caracteresSeparados[i][p])

            if(caracteresSeparados[i][p] == '#' and int(posicoesDosDisparos[p][1])) == p:
                tot_NaviosDestruidos+=1
    
    print('Navios destruídos: ', tot_NaviosDestruidos)