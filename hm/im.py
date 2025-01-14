import pandas as pd
import numpy as np

df = pd.read_html('https://www.oxfordlearnersdictionaries.com/wordlists/oxford3000-5000')[0]
print(df)