# linear search

numbers = [1,2,3,4,5,6,7,8,9,10]

# def find_num(list,number):
#     for i in range(len(list)):
#         if list[i]==number:
#             return i
#     return None

def find_num2(listt:any,number:any)->any:
    for index,value in enumerate(listt):
        if value ==number:
            return index ,value
    return None


# print(find_num(numbers,78)) 

print(find_num2(numbers,8)) 