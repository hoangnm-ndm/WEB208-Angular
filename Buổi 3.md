# Buôi 3: Cấu hình routing

1. Kiểm tra xem trong src có file app-routing.module.ts hay không. Nếu chưa có, tạo routing bằng câu lệnh:

```js
ng new routing-app --routing --defaults
```

2. Import các path vào routing array:

```js
const routes: Routes = [
  { path: "first-component", component: FirstComponent },
  { path: "second-component", component: SecondComponent },
];
```
