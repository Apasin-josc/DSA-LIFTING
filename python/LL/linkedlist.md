Los “dunder” __init__

🔍 Hint: Piénsalo como la puerta mágica que Python abre cuando creas un objeto. Los dos guiones bajos antes y después de init le dicen a Python “¡Ey, llámame automáticamente al instanciar!”

Analogía: Imagina que cada clase viene con un botón secreto (los guiones bajos) que activa el montaje interno del objeto. Si no usáramos esos guiones especiales, Python nunca sabría que ese método es la puerta de entrada.

El parámetro self

🔍 Hint: Dentro de un método de instancia, necesitas una forma de referirte al mismo objeto que llamaste. Ese “yo” eres tú, y en Python le llamamos self.

Analogía: Imagina que eres un chef y tus utensilios son atributos (como head, tail, length). El self es tu delantal: te lo pones para acceder a tus utensilios mientras cocinas.

class LinkedList:
    def __init__(self, value):
        new_node = Node(value)
        self.head = new_node       # self te deja guardar el nodo en tu objeto
        self.tail = new_node
        self.length = 1

def print_list(self):
    temp = self.head
    while temp:
        print(temp.value, end=" -> ")
        temp = temp.next
    print("None")

Eso te ayuda a checar rápido si tu lista crece o no.

------------------------------------------------------------------------------------------------------------------------------------------------------------

LL: Append

__init__ corre solo una vez

Cuando haces my_linked_list = LinkedList(4), Python entra a tu __init__ y crea los atributos self.head, self.tail y self.length.

Piensa en el constructor como la inauguración de tu cocina: ese día nomás etiquetas dónde van tus ingredientes (head y tail).

self.head y self.tail no vuelven a llamar al constructor

Ya que tu lista está creada, self.head y self.tail ya existen como “compartimientos” dentro de tu objeto.

En métodos como append, solo estás diciendo “mira dentro de mi lista (usando self.) y actualiza esos compartimientos”. No estás reinicializando nada, solo accediendo o cambiando lo que ya se guardó.

Analogy del ropero

Imagina que __init__ arma tu ropero y pone un cajón llamado “head” y otro “tail”.

Luego, cuando quieres guardar algo, nomás abres el cajón self.head o self.tail y le metes la ropa nueva. No necesitas reconstruir el ropero cada vez.

¿Por qué self?

self es tu forma de decir “este objeto en particular”. Si tuvieras otra lista (another_list), también tendría su propio another_list.head.

Sin self, Python creería que head es una variable global o local al método, no un atributo de tu objeto.