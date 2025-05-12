def highest_even(li):
    highest_even_number = 0
    for num in li:
        if num % 2 == 0 and num >= highest_even_number:
            highest_even_number = num
        elif not num % 2 == 0 in li:
            return ('there is no even numbers on this list')
            
        return highest_even_number

print(highest_even([10,2,3,4,8,11]))
""" print(highest_even([1,3,5])) """


def highest_even_tuto(li):
    evens = []
    for item in li:
        if item % 2 == 0:
            evens.append(item)
    return max(evens)
print(highest_even_tuto([10,2,3,4,8,12]))