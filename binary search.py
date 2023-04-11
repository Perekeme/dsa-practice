# binary search

numbers = [1,2,3,4,5,6,7,8,9,10]

def find_num2(listt,number)->any:
    first=0
    last_num=len(listt)-1
    while(first<=last_num):
        midpoint= (first+last_num)//2
        if midpoint == number:
            return midpoint
        elif midpoint < number:
            first = midpoint+1
        else:
            last_num =midpoint-1
    return None

print(find_num2(numbers,8)) 