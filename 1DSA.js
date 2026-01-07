/*
# 📘 DSA (Data Structures & Algorithms) – Easy Notes

## 1️⃣ What is DSA?

**DSA = Data Structure + Algorithm**

👉 It means:

* **How data is stored** (Data Structure)
* **How problems are solved step‑by‑step efficiently** (Algorithm)

DSA helps us write **fast, efficient, and optimized code**.

---

## 🔹 Data Structure

### ✅ Definition:

A **Data Structure** is a way to **store, organize, and manage data** so it can be used efficiently.

### 🧠 Real‑Life Example:

* **Bookshelf** → Data Structure
* **Arrangement of books** (by name, subject, size) → Type of Data Structure

---

## 🔸 Common Data Structures

| Data Structure | Simple Meaning             | Real‑Life Example          |
| -------------- | -------------------------- | -------------------------- |
| Array          | List of items              | Shopping list              |
| String         | Collection of characters   | Name, sentence             |
| Stack          | Last In, First Out (LIFO)  | Plate stack 🍽️            |
| Queue          | First In, First Out (FIFO) | Line at counter 🧍‍♂️🧍‍♀️ |
| Linked List    | Connected chain of nodes   | Train compartments 🚆      |
| Tree           | Hierarchical structure     | Family tree 🌳             |
| Graph          | Network of nodes           | Roads, social network 🌐   |
| HashMap        | Key–Value storage          | Phone contacts 📞          |

---

## 🔹 Algorithm

### ✅ Definition:

An **Algorithm** is a **step‑by‑step procedure** to solve a problem or perform a task.

### 🧠 Real‑Life Example: Making Tea 🍵

1. Boil water
2. Add tea leaves
3. Add sugar
4. Serve tea

👉 These steps together form an **algorithm**.

---

## 🔹 DSA = Data Structure + Algorithm

| Part           | Meaning               |
| -------------- | --------------------- |
| Data Structure | How data is stored    |
| Algorithm      | How data is processed |

### 💡 Example:

* **Array** (Data Structure)
* **Sorting numbers** (Algorithm)

Together they make a **DSA problem**.

---

## 🎯 Why is DSA Important?

* Improves **problem‑solving skills**
* Helps crack **coding interviews**
* Makes programs **faster & efficient**
* Essential for **software developers**

---

## 🚀 Key Takeaway

> 🔥 *Good Data Structure + Good Algorithm = Best Performance*

---

📌 *These notes are beginner‑friendly and interview‑oriented.*


🔹 1. Time Complexity Analysis

👉 Measures how much time an algorithm takes as input size increases.

Types of Time Analysis
✅ a) Best Case

Minimum time taken

Happens in the most favorable situation

Example: Linear Search

arr = [10, 20, 30, 40]
key = 10


Element found at first position

⏱ Time: O(1)

✅ b) Average Case

Normal/expected time

Element may be anywhere

Linear Search

On average, element found in middle

⏱ Time: O(n)

✅ c) Worst Case ⭐ (Most Important for Interviews)

Maximum time taken

Happens in least favorable condition

Linear Search

key = 100 (not present)


Search entire array

⏱ Time: O(n)

📌 Interviews mostly focus on Worst Case

4️⃣ What is Big O Notation?

Big O shows how algorithm grows when input increases.

Common Big O values:
Big O	Meaning	Example
O(1)	Constant time	Access array element
O(n)	Linear time	Loop
O(n²)	Quadratic time	Nested loop
O(log n)	Logarithmic	Binary search
O(n log n)	Efficient sorting	Merge sort

5️⃣ Common Time Complexity Explained Simply
🔹 O(1) – Constant Time ⚡

Time does NOT depend on input size.

let arr = [10, 20, 30]
console.log(arr[1])


Even if array has 1 million elements → still 1 step

✅ Fastest

🔹 O(n) – Linear Time 🚶

Time grows with input size.

for(let i = 0; i < n; i++){
  console.log(i)
}


n = 5 → 5 steps

n = 100 → 100 steps

🔹 O(n²) – Quadratic Time 🐢

Nested loops

for(i = 0; i < n; i++){
  for(j = 0; j < n; j++){
    console.log(i, j)
  }
}


n = 5 → 25 steps

n = 100 → 10,000 steps

❌ Very slow for big data

🔹 O(log n) – Logarithmic Time 🚀

Input reduces by half every step

Example: Binary Search
Array: [1,2,3,4,5,6,7,8]
Find: 7


Steps:

Check middle (4)

Right side

Check middle again (7)

👉 Very few steps even for large input

6️⃣ How to Find Time Complexity Easily? (Step-by-Step Method)
✅ Rule 1: Ignore constants
for(i = 0; i < n; i++)  // O(n)


Even if:

for(i = 0; i < 5*n; i++)


Still → O(n)

✅ Rule 2: One loop = O(n)
for(i = 0; i < n; i++)


✔️ O(n)

✅ Rule 3: Nested loop = O(n²)
for(i = 0; i < n; i++){
  for(j = 0; j < n; j++)
}


✔️ O(n²)

✅ Rule 4: Loop reducing input → O(log n)
while(n > 1){
  n = n / 2
}


✔️ O(log n)

✅ Rule 5: Multiple loops → Add them
for(i = 0; i < n; i++) // O(n)
for(j = 0; j < n; j++) // O(n)


👉 O(n + n) = O(n)

7️⃣ Example: Find Time Complexity
function example(n){
  for(let i = 0; i < n; i++){
    console.log(i)
  }

  for(let j = 0; j < n; j++){
    console.log(j)
  }
}

Analysis:

First loop → O(n)

Second loop → O(n)

Total → O(2n) → O(n)

Example 2:
function example(n){
  for(let i = 0; i < n; i++){
    for(let j = 0; j < n; j++){
      console.log(i, j)
    }
  }
}


✔️ O(n²)

 */

