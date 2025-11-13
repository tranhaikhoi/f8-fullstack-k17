const employees = [
  { id: 1, name: "An", projects: ["P1", "P2"] },
  { id: 2, name: "Bình", projects: ["P2", "P3"] },
  { id: 3, name: "Châu", projects: ["P1", "P3", "P4"] },
  { id: 4, name: "Dũng", projects: ["P4"] },
];

// Nhóm nhân viên theo dự án, sao cho mỗi dự án có danh sách nhân viên tham gia.
const projectGroups = employees.reduce((acc, emp) => {
  emp.projects.forEach(project => (acc[project] = [...(acc[project] || []), emp.name]));
  return acc;
}, {});

console.log(projectGroups);
// Tìm dự án có nhiều nhân viên tham gia nhất.
const maxProject = Object.entries(projectGroups).reduce(
  (max, [project, names]) => (names.length > max.count ? { project, count: names.length } : max),
  { project: null, count: 0 }
);

console.log(maxProject);