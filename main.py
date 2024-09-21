from os import walk

filenames = next(walk("images\meme"), (None, None, []))[2]

with open("файл.txt", "w") as file:
    print(filenames, file=file)