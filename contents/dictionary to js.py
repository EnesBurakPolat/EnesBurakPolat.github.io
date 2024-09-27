import tkinter as tk
from tkinter import filedialog, messagebox

def convert_to_js_dictionary(input_file_path, output_file_path):
    try:
        with open(input_file_path, 'r', encoding='utf-8') as file:
            lines = file.readlines()
        
        # Sözlük verisi oluşturma
        dictionary_entries = []
        for line in lines:
            if '=' in line:
                key, value = line.strip().split('=', 1)
                dictionary_entries.append(f'    "{key.strip()}": "{value.strip()}",')
        
        # JavaScript sözlük formatında yazma
        js_dictionary = 'const dictionary = {\n' + '\n'.join(dictionary_entries) + '\n};'
        
        # Çıktı dosyasını oluşturma
        with open(output_file_path, 'w', encoding='utf-8') as output_file:
            output_file.write(js_dictionary)
        
        messagebox.showinfo("Başarılı", f"{output_file_path} dosyası başarıyla oluşturuldu.")
    
    except Exception as e:
        messagebox.showerror("Hata", str(e))

def select_input_file():
    input_file_path = filedialog.askopenfilename(title="Kaynak Dosyayı Seçin", filetypes=[("Text Files", "*.txt")])
    if input_file_path:
        output_file_path = filedialog.asksaveasfilename(defaultextension=".txt", title="Çıktı Dosyası Olarak Kaydet", filetypes=[("Text Files", "*.txt")])
        if output_file_path:
            convert_to_js_dictionary(input_file_path, output_file_path)

# Tkinter arayüzünü oluşturma
root = tk.Tk()
root.title("Dictionary to JS Converter")
root.geometry("300x150")

select_file_button = tk.Button(root, text="Dosya Seç", command=select_input_file)
select_file_button.pack(pady=50)

root.mainloop()
