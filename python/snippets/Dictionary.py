#Dictionary
dictionary = {
    'a' : 1,
    'b' : 2,
    True: 3,
    '123': 4,
}

print(dictionary['b'])

#------------------------------------------------------------------------#

user = {
    'name': 'omar',
    'lastName' : 'coppola',
    'languages' : ['spanish', 'english', 'italian', 'japanese'],
}

#check if a key exist
#Get
#print(user.get['age']) #false
#print(user.get['age', 27]) #adding a default value in case that it doesn't exist the key

#keyword in
print('lastname' in user) #True

#keys - simply checks for the keys
print('lastname' in user.keys()) #true 

#values
print('coppola' in user.values()) #true

#items - grabs the entire item
print(user.items()) #dict_items([('name', 'omar'), ('lastName', 'coppola'), ('languages', ['spanish', 'english', 'italian', 'japanese'])])

#another way of creating dictionaries
user2 = dict( name = 'quePadre') #

#------------------------------------------------------------------------#

#clearing data in dictionary
user.clear() #{}

#------------------------------------------------------------------------#

user = {
    'name': 'omar',
    'lastName' : 'coppola',
    'languages' : ['spanish', 'english', 'italian', 'japanese'],
}

#copying a user 
user2 = user.copy()

#------------------------------------------------------------------------#

user = {
    'name': 'omar',
    'lastName' : 'coppola',
    'languages' : ['spanish', 'english', 'italian', 'japanese'],
}

#removing keys and values from a dictionary
#pop
print(user.pop('languages')) #['spanish', 'english', 'italian', 'japanese'] returns the value we popping

#popItem
print(user.popitem()) #randomly pops an item

#------------------------------------------------------------------------#

user = {
    'name': 'omar',
    'lastName' : 'coppola',
    'languages' : ['spanish', 'english', 'italian', 'japanese'],
}

#update
print(user.update({'lastName' : 'sanchez'})) #updates a key value