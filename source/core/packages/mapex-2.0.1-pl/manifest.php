<?php return array (
  'manifest-version' => '1.1',
  'manifest-attributes' => 
  array (
    'changelog' => 'Mapex. Автор: Наумов Алексей, http://www.createit.ru

История изменения:

2.0.1 (10.10.2012)
[f] Исправлена ошибка при работе на сайте с установленой русской локалью. Теперь все кооррдинаты принудительно приводятся к числам с разделителем-точкой.
[f] Исправлена проблема при не выборе цвета для линии или полигона
[m] Все элементы управления окончательно переведены на русский язык

2.0 (01.10.2012)
[m] Кардинальная смена функциональности и хранения данных. Не совместимо с Mapex более ранних выпусков.
[+] Теперь можно добавлять точки, линии, полигоны, маршрут

1.2 (18.09.2012)
[+] Добавлена строка поиска по адресу.

1.1 (18.09.2012)
Первый выпуск.',
  ),
  'manifest-vehicles' => 
  array (
    0 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modNamespace',
      'guid' => 'bdfdd47ba66dfd9e90d02dcd1497c79c',
      'native_key' => 'mapex',
      'filename' => 'modNamespace/c5b3a219c586ea940d6c97fe67221b6b.vehicle',
      'namespace' => 'mapex',
    ),
    1 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modPlugin',
      'guid' => '436de9c987554a6a20abc1ab9788681e',
      'native_key' => 2,
      'filename' => 'modPlugin/d7671461327de4cbe6b6c189ed8e98d2.vehicle',
      'namespace' => 'mapex',
    ),
    2 => 
    array (
      'vehicle_package' => 'transport',
      'vehicle_class' => 'xPDOObjectVehicle',
      'class' => 'modCategory',
      'guid' => '8d57739ba56baa1490f1bf009858e1ef',
      'native_key' => 1,
      'filename' => 'modCategory/31877f5cb347c32bcaa2625305f08d32.vehicle',
      'namespace' => 'mapex',
    ),
  ),
);