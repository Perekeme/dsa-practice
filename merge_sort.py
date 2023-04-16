# merge sort

def merge_sort(listt) -> any:
    """
    Sorts  a list in ascending order
    Returns a new sorted list

    Divide: Find the midpoint of the list and divide into sublists
    Conquer: Recursively sort the sublists created in previous step
    Combine: Merge the sorted sublists created in previous step

    Takes O(n log n) time
    """
    if len(listt)<=1:
        return listt
    
    left_half, right_half = split(listt)
    left = merge_sort(left_half)
    right = merge_sort(right_half)

    return merge(left,right)

def split(listt):
    """
    Divide the unsorted list at midpoint into sublists
    Returns two sublists - left and right


    Takes overall O(log n) time
    """

    mid = len(listt)//2
    left=listt[:mid]
    right=listt[mid:]

    return left,right

def merge(left,right):
    """
    Merges two lists(arrays), sorting them in the process
    Returns a new mergeed list

    Runs in overall O(n) time
    """
    lo = []
    i=0
    j=0

    while i < len(left) and j < len(right):
        if left[i] < right[j]:
            lo.append(left[i])
            i+=1
        else:
            lo.append(right[j])
            j+=1 
    
    while i < len(left):
        lo.append(left[i])
        i+=1

    while j < len(right):
        lo.append(right[j])
        j+=1

    return lo


alist = [34,23,4,67,98,230,985,54,2,3,4,5,6]

li = merge_sort(alist)
print(li)


def verify_sorted(listt):
    no = len(listt)

    if no == 0 or no == 1:
        return True
    
    return listt[0] <= listt[1] and verify_sorted(listt[1:])

print(verify_sorted(li))
# print(verify_sorted(alist))

    






    
       


      