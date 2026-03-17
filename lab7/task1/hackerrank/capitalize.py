import math
import os
import random
import re
import sys

def solve(s):

    words = s.split(" ")
    result = []
    
    for w in words:
        if len(w) > 0:
            result.append(w[0].upper() + w[1:])
        else:
            result.append(w)
    
    return " ".join(result)

if __name__ == '__main__':
    fptr = open(os.environ['OUTPUT_PATH'], 'w')

    s = input()

    result = solve(s)

    fptr.write(result + '\n')

    fptr.close()
