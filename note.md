# Buổi 2:

1. Cài đặt Angular CLI:
   `npm i @angular/cli -g`

2. Tạo dự án:

```
ng new project_name
cd project_name
ng serve -o
```

3. Cài đặt bootstrap
   `npm i bootstrap`

- Vào trong angular.json thêm đường dẫn cho bootstrap tại achitect > build -> styles

4. Tạo component mới:
   `ng g c pages/home`
   `ng g c components/header`

- Vào file template (html) của app component để thêm component home:

  `<app-home></app-home>`
