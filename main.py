import eel

eel.init("web")

square = 0
number_floors = 0
type_foundation = 0
material = 0
roof_type = 0

@eel.expose
def get_summa(square, number_floors, type_foundation, material, roof_type):
    square = int(square)
    number_floors = int(number_floors)
    type_foundation = int(type_foundation)
    material = int(material)
    roof_type = int(roof_type)
    summa = 0
    summa_foundation = 0
    summa_material = 0
    summa_roof = 0

    elements = square / 25

    if type_foundation == 1:  # Ленточный
        concrete_volume = elements * 5.2
        fittings = elements * 80
        summa_foundation = int(concrete_volume * 3000 + fittings * 50)
        summa += summa_foundation
    elif type_foundation == 2:  # Свайный
        concrete_volume = elements * 5.2
        fittings = elements * 80
        number_piles = int(elements * 12)
        summa_foundation = int(concrete_volume * 3000 + number_piles * 2000 + fittings * 50)
        summa += summa_foundation
    elif type_foundation == 3:  # Плитный
        concrete_volume = square * 0.3
        fittings = concrete_volume / 6.3 * 523
        summa_foundation = int(concrete_volume * 3000 + fittings * 50)
        summa += summa_foundation

    if material == 1:  # Брус
        bar = elements * 15 * number_floors
        summa_material = int(bar * 25000)
        summa += summa_material
    elif material == 2:  # Газобетонный блок
        aerated_concrete_block = elements * 400 * number_floors
        summa_material = int(aerated_concrete_block * 3000)
        summa += summa_material
    elif material == 3:  #  Керамоблок
        ceramic_block = elements * 900 * number_floors
        summa_material = int(ceramic_block * 120)
        summa += summa_material
    elif material == 4:  # Кирпич
        brick = elements * 6000 * number_floors
        summa_material = int(brick * 19)
        summa += summa_material
    elif material == 5:  # Деревянный каркас
        racks = elements * 53 * number_floors
        summa_racks = int(racks * 110)
        overlap = elements * 20 * number_floors
        summa_overlap = int(overlap * 1000)
        summa_material = summa_racks + summa_overlap
        summa += summa_material

    if roof_type == 1:  # Листовые материалы
        sheet_material = elements * 37
        summa_roof = int(sheet_material * 500)
        summa += summa_roof
    elif roof_type == 2:  # Гибкая кровля
        flexible_roof = elements * 13
        summa_roof = int(flexible_roof * 500)
        summa += summa_roof
    elif roof_type == 3:  # Штучные материалы
        ceramic_roof = elements * 37
        summa_roof = int(ceramic_roof * 4000)
        summa += summa_roof
    print(square, number_floors, type_foundation, material, roof_type)
    return str(summa_foundation), str(summa_material), str(summa_roof), str(summa)

eel.start("configurator.html", size=(520, 500))
