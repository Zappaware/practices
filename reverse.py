message='Hello World!'
translated=''
i = len(message) - 1

for word in message:
    translated += message[i]
    i = i -1

print(translated)