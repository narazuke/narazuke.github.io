---
title: pythonのfomatメソッドを使った桁数表示
created: 2022-11-24T17:46
updated: 2022-11-30T20:59
description: 
category: tech
tag: [python]
author: [nozzle]
---
## 数字
### 基本
```python
a=123.456789

# 123.456789
print(f"{a}")
```

### 指数表示
```python
# 1.234568e+02
print(f"{a:e}")
```

### 小数点以下の桁数指定
```python
# 1.23e+02
print(f"{a:.3}")

# 1.235e+02
print(f"{a:.3e}")

# 123.457
print(f"{a:.3f}")

# 123.456789000000
print(f"{a:.12f}")

```

### 数字列の桁数指定
```python
# <-    半角20字     ->
#             1.23e+02
print(f"{a:20.3}")

# <-    半角20字     ->
# 000000123.4567890000
print(f"{a:020.10f}")

# <-    半角20字     ->
# 123.4570000000000000hoge
print(f"{a:<020.3f}hoge")
```

### `=`(イコール)入り
変数の直後に`=`を置くのが正しい。
```python
print(f"{a=:.3f}")
```
