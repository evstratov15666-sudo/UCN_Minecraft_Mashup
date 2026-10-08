# Разработка Ultimate Minecraft Night

## Структура проекта

```
src/
├── core/              # Основные системы игры
│   ├── inventory.js   # Система инвентаря блоков
│   ├── enemies.js     # Враги (animatronics + мобы)
│   ├── crafting.js    # Рецепты крафтинга
│   ├── gameState.js   # Состояние игры
│   ├── controller.js  # Главный контроллер
│   └── tests.js       # Тесты
├── mods/              # UI и интеграция с Melty
│   ├── office-ui.html # Экран выбора ночи
│   └── game-ui.html   # Игровой интерфейс
├── minecraft/         # Интеграция Minecraft
└── ucn/               # Интеграция UCN

resources/
├── textures/          # Текстуры блоков
└── models/            # 3D модели

melty.json            # Основная конфигурация
melty-manifest.json   # Полная спецификация
```

## Системы игры

### 1. Inventory System (`inventory.js`)
Управляет инвентарём блоков Minecraft.

```javascript
const inventory = new MinecraftInventory();
inventory.addBlock('stone', 10);
inventory.removeBlock('dirt', 5);
const stones = inventory.getBlockQuantity('stone');
```

**Блоки:**
- stone, dirt, cobblestone, oak_wood, oak_log, sand, glass
- iron_ore, iron_ingot, diamond, tnt, crafting_table, furnace

### 2. Enemy System (`enemies.js`)
Управляет animatronics и Minecraft мобами.

```javascript
const enemies = new EnemySystem();
enemies.setEnemyDifficulty('freddy_fazbear', 5);
enemies.setEnemyDifficulty('creeper', 3);
const threats = enemies.getActiveThreats(currentNight);
```

**Animatronics:** 22 персонажа (Freddy, Bonnie, Chica, Foxy и др.)
**Мобы:** Creeper, Enderman, Wither, Zombie, Skeleton

### 3. Crafting System (`crafting.js`)
Minecraft рецепты крафтинга.

```javascript
const crafting = new CraftingSystem();
if (crafting.canCraft('oak_planks', inventory)) {
  crafting.craft('oak_planks', inventory);
}
const recipes = crafting.getAvailableRecipes(inventory);
```

**Рецепты:**
- Oak Planks: 1 log → 4 planks
- Sticks: 2 planks → 4 sticks
- Crafting Table: 4 planks
- Pickaxes (wood, stone, iron)
- TNT: 5 gunpowder + 4 sand
- Door, Chest

### 4. Game State (`gameState.js`)
Центральное управление состоянием игры.

```javascript
const gameState = new GameState();
gameState.startGame(1, 'single_player');
gameState.updateTime(deltaSeconds);
gameState.recordBlockPlaced();
gameState.recordEnemyDefeated('boss');
const stats = gameState.getStats();
```

**Возможности:**
- 7 ночей
- Отслеживание времени
- Подсчёт очков
- Статистика действий

### 5. Game Controller (`controller.js`)
Главный контроллер, который объединяет все системы.

```javascript
const game = new MashupGameController();
game.initialize();
game.startNight(1, selectedEnemies, selectedDifficulties);
game.placeBlock('stone', 0, 1, 0);
game.useDynamite(5, 5, 5, 5);
game.craftItem('oak_planks');
```

## Интеграция с Melty.gg

### Точки входа
1. **office-ui.html** - Экран выбора ночи и настроек
2. **game-ui.html** - Основной игровой интерфейс

### Конфигурация
- **melty.json** - Быстрая конфигурация
- **melty-manifest.json** - Полная спецификация для Melty

## Тестирование

```bash
# Локальное тестирование
node src/core/tests.js

# Результат: ✓ 20+ passed tests
```

## Сборка

### Windows
```bash
build.bat
```

### Linux/Mac
```bash
bash build.sh
```

Результат: `dist/ultimate-minecraft-night-v0.1.0.tar.gz`

## Защищённые локации

Эти области **нельзя разрушать**:
- Офисный стол (координаты)
- Коридоры (North & South)
- Вентиляционная шахта

## Начало разработки

1. Отредактируй `src/core/enemies.js` для добавления новых врагов
2. Добавь рецепты в `src/core/crafting.js`
3. Запусти тесты: `node src/core/tests.js`
4. Сними скриншоты UI
5. Создай PR в GitHub

## Известные проблемы

- [ ] Multiplayer требует дополнительного тестирования
- [ ] Анимация врагов упрощена для прототипа
- [ ] Звук не интегрирован

## Будущие улучшения

- Полная 3D графика
- Сетевой multiplayer
- Кастомные карты
- Модо-поддержка
- Leaderboards
