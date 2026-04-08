<?php 
require 'config.php';
if (!isset($_SESSION['user_id'])) {
    header('Location: index.php');
    exit;
}

// ➕ Agregar
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['add_patient'])) {
    $stmt = $pdo->prepare("INSERT INTO patients (nombre, apellido, direccion, telefono) VALUES (?, ?, ?, ?)");
    $stmt->execute([$_POST['nombre'], $_POST['apellido'], $_POST['direccion'], $_POST['telefono']]);
    header('Location: dashboard.php'); exit;
}

// ✏️ Editar
if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['edit_patient'])) {
    $stmt = $pdo->prepare("UPDATE patients SET nombre=?, apellido=?, direccion=?, telefono=? WHERE id=?");
    $stmt->execute([$_POST['nombre'], $_POST['apellido'], $_POST['direccion'], $_POST['telefono'], $_POST['id']]);
    header('Location: dashboard.php'); exit;
}

// 🗑️ Eliminar
if (isset($_GET['delete'])) {
    $stmt = $pdo->prepare("DELETE FROM patients WHERE id = ?");
    $stmt->execute([$_GET['delete']]);
    header('Location: dashboard.php'); exit;
}

// 📥 Listar y preparar edición
$patients = $pdo->query("SELECT * FROM patients ORDER BY id DESC")->fetchAll();
$editPatient = null;
if (isset($_GET['edit'])) {
    $stmt = $pdo->prepare("SELECT * FROM patients WHERE id = ?");
    $stmt->execute([$_GET['edit']]);
    $editPatient = $stmt->fetch();
}
?>
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Panel de Pacientes</title>
    <link rel="stylesheet" href="style.css">
</head>
<body>
    <div class="container">
        <header>
            <h1>Pacientes</h1>
            <a href="logout.php" class="btn secondary">Cerrar Sesión</a>
        </header>

        <section class="card">
            <h2><?= $editPatient ? 'Editar Paciente' : 'Nuevo Paciente' ?></h2>
            <form method="POST" class="grid-form">
                <input type="hidden" name="id" value="<?= $editPatient['id'] ?? '' ?>">
                <input type="text" name="nombre" placeholder="Nombre" value="<?= htmlspecialchars($editPatient['nombre'] ?? '') ?>" required>
                <input type="text" name="apellido" placeholder="Apellido" value="<?= htmlspecialchars($editPatient['apellido'] ?? '') ?>" required>
                <input type="text" name="direccion" placeholder="Dirección" value="<?= htmlspecialchars($editPatient['direccion'] ?? '') ?>" required>
                <input type="text" name="telefono" placeholder="Teléfono" value="<?= htmlspecialchars($editPatient['telefono'] ?? '') ?>" required>
                <button type="submit" name="<?= $editPatient ? 'edit_patient' : 'add_patient' ?>">
                    <?= $editPatient ? 'Actualizar' : 'Guardar' ?>
                </button>
                <?php if ($editPatient): ?>
                    <a href="dashboard.php" class="btn secondary">Cancelar</a>
                <?php endif; ?>
            </form>
        </section>

        <section class="card">
            <h2>Lista</h2>
            <?php if (empty($patients)): ?>
                <p class="empty">No hay pacientes registrados.</p>
            <?php else: ?>
                <div class="table-wrap">
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th><th>Nombre</th><th>Apellido</th><th>Dirección</th><th>Teléfono</th><th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <?php foreach ($patients as $p): ?>
                            <tr>
                                <td><?= $p['id'] ?></td>
                                <td><?= htmlspecialchars($p['nombre']) ?></td>
                                <td><?= htmlspecialchars($p['apellido']) ?></td>
                                <td><?= htmlspecialchars($p['direccion']) ?></td>
                                <td><?= htmlspecialchars($p['telefono']) ?></td>
                                <td>
                                    <a href="dashboard.php?edit=<?= $p['id'] ?>" class="btn small">Editar</a>
                                    <a href="dashboard.php?delete=<?= $p['id'] ?>" class="btn danger small" onclick="return confirm('¿Eliminar este paciente?')">Eliminar</a>
                                </td>
                            </tr>
                            <?php endforeach; ?>
                        </tbody>
                    </table>
                </div>
            <?php endif; ?>
        </section>
    </div>
</body>
</html>