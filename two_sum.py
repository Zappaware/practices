def find_two_sum(numbers, target_sum):
    for i in range(len(numbers) - 1):
        for j in range(i+1, len(numbers)):
            if numbers[i] + numbers[j] == target_sum:
                print(numbers[i], numbers[j])
                return (i, j)
    return None

print(find_two_sum([3, 1, 5, 7, 5, 9], 10)) # (0, 3)
print(find_two_sum([3, 1, 5, 7, 5, 9], 20)) # None
print(find_two_sum([3, 1, 5, 7, 5, 9], 12)) # (2, 5)
print(find_two_sum([3, 1, 5, 7, 5, 9], 10)) # (0, 3)
