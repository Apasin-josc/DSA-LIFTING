basket = [1,2,3,4,5]

#adding

#append
new_list = basket.append(6)
new_list = basket

#insert (anywhere we want in the index)
basket.insert(4, 100)
new_list = basket

#extend takes what we call an iterable, something that we can loop over
new_list = basket.extend([100, 101])    #[1, 2, 3, 4, 100, 5, 6, 100, 101]

#------------------------------------------------------------------------#
basket = [1,2,3,4,5]

#removing

#pop
basket.pop() #remove the last value
basket.pop(1) #removing the first value

#remove
basket.remove(4)    #removes an specific value in the list

#clear 
new_list = basket.clear() #removes whatever is in the list

#------------------------------------------------------------------------#
basket = [1,2,3,4,5]

#finding

#index
print(basket.index(2)) #1, is goign to check that the index of 1 has the value 2
print(basket.index(3, 0, 4)) # find me the index of 3, start looking from index 0 to index 4

#SPECIAL in *keyword*
print(3 in basket) #returning true or false
print('i' in 'hi my name is omar') #true

#count
print(basket.count(3)) #1

#------------------------------------------------------------------------#
basket = [3,2,1,5,4]

#sorting

#sort
basket.sort()
print(basket.sort()) #1,2,3,4,5

#sorted
sorted(basket) #produces a new array

#copy
new_basket = basket.copy() #copies the list

#reverse
basket.reverse() #it reverses the basket in the place, switches the indexes in opposite sites