#Tuple
my_tuple = (1,2,3,4,5)
print(5 in my_tuple) #true

user = {
    (1,2): [1,2,3],
    'greet': 'hello',
    'age': 20
}

print(user[(1,2)])

#count & index

print(my_tuple.count(5)) #1
print(len(my_tuple)) #5
print(my_tuple.index(1)) #2