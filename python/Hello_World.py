is_magician = True
is_expert = False

#check if magician AND expert
if is_magician and is_expert:
    print('you are a master magician')
elif is_magician and not is_expert:
    print('at least youre getting there')
elif not is_magician:
    print('you need magic powers')
else:
    print('okay')