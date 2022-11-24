def bottle_song(numBottles):
	num = numBottles
	while num > 0:
		if num == 0:
			print(f'No more bottles of beer on the wall, no more bottles of beer. Go to the store and buy some more, {numBottles} of beer on the wall.')
		elif num == 1:
			print('1 bottle of beer on the wall, 1 bottle of beer. Take on down and pass it around, no more bottles of beer on the wall.')
			num = num -1
		elif num == 2:
			print(f'{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottle of beer on the wall.')
			num = num-1
		else:
			print(f'{num} bottles of beer on the wall, {num} bottles of beer. Take one down and pass it around, {num-1} bottles of beer on the wall.')
			num = num - 1
print(bottle_song(5))


