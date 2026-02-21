// src/pages/project_posts/KuzushijiMNIST.tsx
import React from 'react';
import { Card } from '../../components/ui/card'; 
import 'katex/dist/katex.min.css';
import { BlockMath, InlineMath } from 'react-katex';

export function KuzushijiMNIST() {
  return (
    <article className="prose prose-slate max-w-none">
      <h1 className="text-4xl font-bold mb-4">Classifying Kuzushiji-MNIST</h1>
      <p className="text-muted-foreground mb-8">February 2026</p>
      
      <div className="text-lg leading-relaxed space-y-6">
        
        {/* IMAGE: Floated to the right so text wraps around it */}
        <img 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Kuzushiji-MNIST_examples.png/800px-Kuzushiji-MNIST_examples.png" 
          alt="Examples of Kuzushiji characters" 
          className="float-right w-1/3 ml-8 mb-4 rounded-xl shadow-md border" 
        />
        
        <p>
          The Kuzushiji-MNIST dataset is a fantastic drop-in replacement for the classic digits dataset. 
          Instead of handwritten numbers, it features 70,000 images of cursive Japanese characters 
          (Kuzushiji) that were widely used in classical literature before the modern standardization of the writing system.
        </p>

        <p>
          To tackle this image classification problem, we can set up a convolutional neural network. 
          Because the dataset is structured exactly like standard MNIST, loading it using scientific computing libraries like NumPy is incredibly straightforward.
        </p>

        {/* CODE CARD: A sleek, dark terminal-style code block */}
        <Card className="bg-slate-950 text-slate-50 p-6 my-8 overflow-x-auto border-slate-800">
          <pre>
            <code className="font-mono text-sm">
{`import numpy as np

def load_kuzushiji(img_path, label_path):
    # Load the images and labels
    images = np.load(img_path)['arr_0']
    labels = np.load(label_path)['arr_0']
    
    # Normalize pixel values
    images = images.astype('float32') / 255.0
    return images, labels`}
            </code>
          </pre>
        </Card>

        <p>
          Once the data is loaded and normalized, it passes through the network. In the final layer, 
          we apply the Softmax function to output a probability distribution across the 10 character classes, ensuring all predictions sum to 1.
        </p>

        {/* MATH CARD: A soft background card to highlight an equation */}
        <Card className="p-6 my-8 bg-muted/30 flex justify-center overflow-x-auto border-2">
           <div className="text-center text-muted-foreground text-xl">
              <BlockMath math="\sigma(\vec{z})_i = \frac{e^{z_i}}{\sum_{j=1}^{K} e^{z_j}}" />
           </div>
        </Card>

      </div>
    </article>
  );
}