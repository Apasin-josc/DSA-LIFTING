username = input('enter username -- ')
password = input('enter your password -- ')
hashedPassword = len(password) * '*'

print(f'hello {username}, your password {hashedPassword} is {len(password)} characters long')