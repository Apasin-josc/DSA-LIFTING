#Sets
my_set = {1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5}
#print(my_set) #{1, 2, 3, 4, 5}


#------------------------------------------------------------------------#
my_set = {1,2,3,4,5}
#adding values to a set

#add
my_set.add(6) #{1, 2, 3, 4, 5, 6}

#------------------------------------------------------------------------#
my_set = {1,2,3,4,5}

#checking if something exists
#print(1 in my_set)#true

#------------------------------------------------------------------------#
my_set = {1,2,3,4,5}

#copying a set
new_set = my_set.copy()

#------------------------------------------------------------------------#
#------------------------------------------------------------------------#
#------------------------------------------------------------------------#

#important set methods 

my_set = {1,2,3,4,5}
your_set = {4,5,6,7,8,9,10}

""" 
.difference()
.discard()
.difference_update()
.intersection()
.isdistjoint()
.issubset()
.issuperset()
.union() 
"""

#difference simply says my_set.difference and we give it another set such as your set
print(my_set.difference(your_set)) # {1, 2, 3}

#discard, it removes an element fro a set if it is a member
print(my_set.discard(5))
print(my_set) #{1, 2, 3, 4}

#difference_update, remove all elements of another set from `this` set
print()