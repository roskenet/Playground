'''
Created on Mar 1, 2020

@author: felix
'''

def coeff(n, k):
    if(2 * k > n) :
        k = n - k
    
    result = 1
    for i in range(1, k+1):
        result = result * ((n - k + i) / i)
    
    return result

def diagonal(n, p):
    result = 0
    for i in range(n, p-1, -1):
        result = result + coeff(i, p)

    return result

print(diagonal(20, 5)) #Should be 54264
