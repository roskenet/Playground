'''
Created on Mar 1, 2020

@author: felix
'''

import fractions

def coeff(n, k):
    if(2 * k > n) :
        k = n - k
    
    result = fractions.Fraction(1)
    for i in range(1, k+1):
        result = result * fractions.Fraction((n - k + i),i)
    
    return result

def diagonal(n, p):
    return coeff(n+1, p+1)

print(diagonal(20, 5)) #Should be 54264
