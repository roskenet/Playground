'''
Created on Mar 1, 2020

@author: felix
'''
import fractions

cache = {}

def coeff(n, k):

    if(2 * k > n):
        k = n - k
    
    if cache.get(n) != None:
        if cache.get(n).get(k) != None:
            return cache.get(n).get(k)

    result = fractions.Fraction(1)
    for i in range(1, k+1):
        temp = fractions.Fraction((n - k + fractions.Fraction(i)) / fractions.Fraction(i)) 
        result = result * temp
    
    if cache.get(n) == None:
        cache[n] = {}

    cache[n][k] = result
    return result

def diagonal(n, p):
    result = 0
    for i in range(n, p-1, -1):
        result = result + coeff(i, p)

    return result


print(diagonal(20, 5)) #Should be 54264

#print(coeff(14,5))