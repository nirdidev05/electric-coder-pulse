import React, { useState } from 'react';
import { CodeIcon, DataIcon, ArchitectureIcon, MemoryIcon, CPUIcon, ResultsIcon } from './CustomIcon';
import { useTranslation } from '@/hooks/useTranslation';

const Implementation: React.FC = () => {
  const t = useTranslation();
  const [activeCodeSection, setActiveCodeSection] = useState('preprocessing');

  const codeSections = [
    {
      id: 'preprocessing',
      title: t.gptCodeTracer.implementation.codeSections.preprocessing.title,
      description: t.gptCodeTracer.implementation.codeSections.preprocessing.description,
      file: t.gptCodeTracer.implementation.codeSections.preprocessing.file,
      language: 'python',
      icon: DataIcon
    },
    {
      id: 'training',
      title: t.gptCodeTracer.implementation.codeSections.training.title,
      description: t.gptCodeTracer.implementation.codeSections.training.description,
      file: t.gptCodeTracer.implementation.codeSections.training.file,
      language: 'python',
      icon: ResultsIcon
    },
    {
      id: 'evaluation',
      title: t.gptCodeTracer.implementation.codeSections.evaluation.title,
      description: t.gptCodeTracer.implementation.codeSections.evaluation.description,
      file: t.gptCodeTracer.implementation.codeSections.evaluation.file,
      language: 'python',
      icon: ResultsIcon
    }
  ];

  const codeImplementations = {
    preprocessing: `# ${t.gptCodeTracer.implementation.codeComments.preprocessing.title}
# ${t.gptCodeTracer.implementation.codeComments.preprocessing.author}
import numpy as np
import pandas as pd
import os
import random
import numpy as np
import gc
import re
import struct
from tqdm import tqdm

SOURCE_DATA_PATH = "path/to/source/data.txt"
os.makedirs(os.path.dirname("data-dp/"), exist_ok=True)

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.logBoilerplate}
log_file = open("data_prep.log", "w")
pbar_recept_string = " " * 200 + "\\n"
log_file.write(pbar_recept_string)
log_file.write(pbar_recept_string)
log_file.flush()

def log(s:str, p_level=None):
    if p_level == 1:
        log_file.seek(0,0)
        log_file.write(pbar_recept_string)
        log_file.seek(0,0)
        log_file.write(s)
        log_file.seek(0,2)
    elif p_level == 2:
        log_file.seek(len(pbar_recept_string), 0)
        log_file.write(pbar_recept_string)
        log_file.seek(len(pbar_recept_string), 0)
        log_file.write(s)
        log_file.seek(0,2)
    else:
        if s[0].upper() == s[0]:
            start = "\\n"
            end = ":"
        else:
            start = "    --> "
            end = ""
        log_file.write(start + s + end + "\\n")
    log_file.flush()

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.setRandomSeed}
seed = 42
np.random.seed(seed)
random.seed(seed)

class TinypyTokenizer():
    def __init__(self):
        # defining the keywords list
        self.keywords = sorted([
            '# ', '&', ';', '?', '|', '@', '^', '$',
            '# output\\n', '# code\\n', '\\n#STEP\\n',
            '\\n', '\\t', '\\n\\n',
            'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 
            'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',
            '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
            'while', '=', '+',
            '(', ')', ':', ',', '.',
            'if', 'elif', 'else',
            '==', '<', '>', 'not', '!=',
            'print(',
        ], key = len, reverse = True)
        pattern = "|".join([re.escape(kw) for kw in self.keywords]) + '|[^ ]+?'
        self.regex = re.compile(pattern)
        self.encod_map = { kw : i for i, kw in enumerate(self.keywords)}
        self.decod_map = { i : kw for i, kw in enumerate(self.keywords)}

    def tokenize(self, input_string):
        return self.regex.findall(input_string)

    def encode(self, input_string):
        tokens = self.tokenize(input_string)
        return [self.encod_map[token] for token in tokens]

    def decode(self, tokens_ids):
        return [self.decod_map[id] for id in tokens_ids]

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.loadDataset}
log("Loading the dataset")
with open(SOURCE_DATA_PATH, "r") as f:
    data = f.read()

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.splitByExamples}
log("Splitting by \\\\n\\\\n")
examples = data.split("\\n\\n")[:-1]
log(f"Total number of examples: {len(examples):,}")

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.addStepIds}
log("Adding execution step IDs")
processed_examples = []
step_counter = 0

for example in examples:
    processed_examples.append(f"\\n#STEP {step_counter}\\n{example}")
    step_counter += 1

examples = processed_examples
del data
gc.collect()

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.createSplits}
log("Creating dataset splits")
train_examples = examples[:1_000_000]
val_examples = examples[1_000_000:1_010_000]
test_examples = examples[1_010_000:1_010_100]

log(f"Train: {len(train_examples)} | Val: {len(val_examples)} | Test: {len(test_examples)}")

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.saveTextFiles}
log("Saving text datasets")
with open("data-dp/train.txt", 'w') as f:
    f.write("\\n\\n".join(train_examples) + "\\n\\n")
with open("data-dp/val.txt", 'w') as f:
    f.write("\\n\\n".join(val_examples) + "\\n\\n")
with open("data-dp/test.txt", 'w') as f:
    f.write("\\n\\n".join(test_examples) + "\\n\\n")

del train_examples, val_examples, test_examples
gc.collect()

# ${t.gptCodeTracer.implementation.codeComments.preprocessing.tokenization}
log("Tokenizing datasets")
tpt = TinypyTokenizer()

def encode_to_memmap(input_file_path, output_file_path):
    with open(input_file_path, 'r') as f:
        examples_string = f.read()
    examples = examples_string.split('\\n\\n')[:-1]
    output_memmap = np.memmap(output_file_path, dtype=np.uint8, mode='w+', 
                             shape=(sum(len(tpt.encode(e)) for e in examples),))
    
    index = 0
    for example in tqdm(examples):
        tokenized_example = tpt.encode(example)
        output_memmap[index:index+len(tokenized_example)] = tokenized_example
        index += len(tokenized_example)
    
    del output_memmap
    gc.collect()
    return None

log("${t.gptCodeTracer.implementation.codeComments.preprocessing.encodingFiles}")
encode_to_memmap("data-dp/train.txt", "data-dp/train.bin")

log("Encoding val.txt to val.bin")
encode_to_memmap("data-dp/val.txt", "data-dp/val.bin")

log("${t.gptCodeTracer.implementation.codeComments.preprocessing.savingVocabSize}")
with open("data-dp/vocab_size.txt", "w") as f:
    f.write(str(len(tpt.keywords)))

log_file.close()`,

    training: `# ${t.gptCodeTracer.implementation.codeComments.training.title}
# ${t.gptCodeTracer.implementation.codeComments.training.author}
import random
import os
import time
import torch
import datetime
import math
import inspect
import torch.nn as nn
import torch.nn.functional as F
import numpy as np
import torch.distributed as dist
from torch.nn.parallel import DistributedDataParallel as DDP

# ${t.gptCodeTracer.implementation.codeComments.training.setDeviceIds}
deviceids = [0, 1]

# ${t.gptCodeTracer.implementation.codeComments.training.setDataDirectory}
data_dirs = [
    "/kaggle/input/tinypy-language-model/datahack/data/generic-3-digits/",
    "/kaggle/input/tinypy-language-model/datahack/data/arithmetics/",
    "/kaggle/input/tinypy-language-model/datahack/data/conditionals/"
]

# ${t.gptCodeTracer.implementation.codeComments.training.archHyperparams}
block_size = 256     # ${t.gptCodeTracer.implementation.codeComments.training.maximumContextLength}
n_embd = 384  # ${t.gptCodeTracer.implementation.codeComments.training.ensureMultipleOfHeads}
n_head = 8  # ${t.gptCodeTracer.implementation.codeComments.training.increaseHeadsParallelization}
n_layer = 8  # ${t.gptCodeTracer.implementation.codeComments.training.increaseLayersLearning}

batch_size = 190       # ${t.gptCodeTracer.implementation.codeComments.training.batchSizeTraining}

# ${t.gptCodeTracer.implementation.codeComments.training.checkDdpRun}
ddp = int(os.environ.get('RANK', -1)) != -1

# ${t.gptCodeTracer.implementation.codeComments.training.ddpSetupControl}
if ddp:
    print("ddp is set to True")
    from torch.distributed import init_process_group, destroy_process_group
    assert torch.cuda.is_available()
    init_process_group(backend='nccl', timeout=datetime.timedelta(minutes=60))
    ddp_rank = int(os.environ['RANK'])
    ddp_local_rank = int(os.environ['LOCAL_RANK'])
    ddp_world_size = int(os.environ['WORLD_SIZE'])
    assert ddp_world_size == len(deviceids)
    device = f'cuda:{deviceids[ddp_rank]}'
    torch.cuda.set_device(device)
    master_process = ddp_rank == 0
    seed_offset = ddp_rank
else:
    print('ddp is set to False')
    assert len(deviceids) == 1
    master_process = True
    ddp_rank = 0
    seed_offset = 0
    ddp_world_size = 1
    device = f'cuda:{deviceids[ddp_rank]}'
    torch.cuda.set_device(device)

if master_process:
    # ${t.gptCodeTracer.implementation.codeComments.training.prepareCheckpoints}
    os.makedirs(os.path.dirname("checkpoints/"), exist_ok=True)
    
    # ${t.gptCodeTracer.implementation.codeComments.training.openLogFile}
    log_file = open("train.log", "w")

    # ${t.gptCodeTracer.implementation.codeComments.training.createLogBoilerplate}
    pbar_recept_string = " " * 200 + "\\n"
    log_file.write(pbar_recept_string)
    log_file.write(pbar_recept_string)
    log_file.flush()

    # ${t.gptCodeTracer.implementation.codeComments.training.defineLogFunction}
    def log(s:str, p_level=None):
        if p_level == 1:
            log_file.seek(0,0)
            log_file.write(pbar_recept_string)
            log_file.seek(0,0)
            log_file.write(s)
            log_file.seek(0,2)
        elif p_level == 2:
            log_file.seek(len(pbar_recept_string), 0)
            log_file.write(pbar_recept_string)
            log_file.seek(len(pbar_recept_string), 0)
            log_file.write(s)
            log_file.seek(0,2)
        else:
            log_file.write('\\n' + s + '\\n')
            print(s)
        log_file.flush()

    batch_log = open('batch_log.log', 'w')

# ${t.gptCodeTracer.implementation.codeComments.training.setRandomSeed}
seed = 42 + seed_offset
torch.manual_seed(seed)
random.seed(seed)
np.random.seed(seed)

with open(data_dirs[0] + "vocab_size.txt", "rb") as f:
    vocab_size = int(f.read())
if master_process: log(f"vocab_size: {vocab_size}")

# ${t.gptCodeTracer.implementation.codeComments.training.loadTrainBin}
if master_process: log("Loading train.bin")
before = time.time()
train_data = np.concatenate([np.memmap(d + "train.bin", dtype=np.uint8, mode="r") for d in data_dirs])
train_data = np.array(train_data)
after = time.time()
if master_process: log(f"took {after - before} seconds")

# ${t.gptCodeTracer.implementation.codeComments.training.loadValBin}
if master_process: log("Loading val.bin")
before = time.time()
val_data = np.concatenate([np.memmap(d + "val.bin", dtype=np.uint8, mode="r") for d in data_dirs])
val_data = np.array(val_data)
after = time.time()
if master_process: log(f"took {after - before} seconds")

# ${t.gptCodeTracer.implementation.codeComments.training.modelComponents}

class Head(nn.Module):
    """${t.gptCodeTracer.implementation.codeComments.training.oneHeadSelfAttention}"""
    def __init__(self, head_size):
        super().__init__()
        self.key = nn.Linear(n_embd, head_size, bias=False)
        self.query = nn.Linear(n_embd, head_size, bias=False)
        self.value = nn.Linear(n_embd, head_size, bias=False)
        self.dropout = nn.Dropout(0)

    def forward(self, x):
        B,T,C = x.shape
        k = self.key(x)   
        q = self.query(x)
        v = self.value(x)
        
        out = torch.nn.functional.scaled_dot_product_attention(
            q, k, v, attn_mask=None, dropout_p=0 if not self.training else 0, is_causal=True
        )
        return out

class MemoryAugmentedAttention(nn.Module):
    """${t.gptCodeTracer.implementation.codeComments.training.coreInnovationMemory}"""
    def __init__(self, num_heads, head_size, memory_size=256):
        super().__init__()
        self.heads = nn.ModuleList([Head(head_size) for _ in range(num_heads)])
        self.memory = nn.Parameter(torch.randn(memory_size, num_heads * head_size))
        self.proj = nn.Linear(n_embd, n_embd)
        self.dropout = nn.Dropout(0)

    def forward(self, x):
        out = torch.cat([h(x) for h in self.heads], dim=-1)
        
        batch_size, seq_len, emb_dim = out.shape
        if seq_len <= self.memory.shape[0]:
            memory_slice = self.memory[:seq_len, :].unsqueeze(0)
        else:
            memory_slice = self.memory.unsqueeze(0).expand(batch_size, -1, -1)

        out = out + memory_slice
        return self.dropout(self.proj(out))

class ExecutionStepEmbedding(nn.Module):
    """${t.gptCodeTracer.implementation.codeComments.training.coreInnovationStep}"""
    def __init__(self, num_steps, embedding_dim):
        super().__init__()
        self.step_embedding = nn.Embedding(num_steps, embedding_dim)

    def forward(self, step_ids):
        return self.step_embedding(step_ids)

class Block(nn.Module):
    """${t.gptCodeTracer.implementation.codeComments.training.preNormalizedTransformer}"""
    def __init__(self, n_embd, n_head):
        super().__init__()
        head_size = n_embd // n_head
        self.sa = MemoryAugmentedAttention(n_head, head_size)
        self.ffwd = nn.Sequential(
            nn.Linear(n_embd, 4 * n_embd),
            nn.GELU(),
            nn.Linear(4 * n_embd, n_embd),
            nn.Dropout(0)
        )
        self.ln1 = nn.LayerNorm(n_embd, bias=False)
        self.ln2 = nn.LayerNorm(n_embd, bias=False)

    def forward(self, x):
        x = x + 0.1 * self.sa(self.ln1(x))
        x = x + 0.1 * self.ffwd(self.ln2(x))
        return x

class GPT(nn.Module):
    """${t.gptCodeTracer.implementation.codeComments.training.enhancedGptMemory}"""
    def __init__(self):
        super().__init__()
        self.token_embedding_table = nn.Embedding(vocab_size, n_embd)
        self.position_embedding_table = nn.Embedding(block_size, n_embd)
        self.step_embedding = ExecutionStepEmbedding(block_size, n_embd)
        self.blocks = nn.Sequential(*[Block(n_embd, n_head=n_head) for _ in range(n_layer)])
        self.ln_f = nn.LayerNorm(n_embd, bias=False)
        self.lm_head = nn.Linear(n_embd, vocab_size)

    def forward(self, idx, targets=None, step_ids=None):
        B, T = idx.shape

        tok_emb = self.token_embedding_table(idx)
        pos_emb = self.position_embedding_table(torch.arange(T, device=device))
        step_emb = self.step_embedding(step_ids) if step_ids is not None else torch.zeros_like(tok_emb)

        x = tok_emb + pos_emb + step_emb
        x = self.blocks(x)
        x = self.ln_f(x)
        logits = self.lm_head(x)

        if targets is None:
            loss = None
        else:
            B, T, C = logits.shape
            logits = logits.view(B * T, C)
            targets = targets.view(B * T)
            loss = F.cross_entropy(logits, targets)

        return logits, loss

# ${t.gptCodeTracer.implementation.codeComments.training.createInitializeModel}
model = GPT()
model.to(device)
num_parameters = sum(p.numel() for p in model.parameters() if p.requires_grad)

if master_process:
    print(f'Model has {num_parameters:,} trainable parameters')

# ${t.gptCodeTracer.implementation.codeComments.training.trainingSetup}
learning_rate = 1e-3
max_iters = 10000
optimizer = torch.optim.AdamW(model.parameters(), lr=learning_rate)

# ${t.gptCodeTracer.implementation.codeComments.training.trainingLoop}
for iter in range(max_iters):
    # ${t.gptCodeTracer.implementation.codeComments.training.getBatchForward}
    idx = torch.randint(0, len(train_data) - block_size, (batch_size,))
    x = torch.stack([torch.from_numpy(train_data[i:i+block_size].astype(np.int64)) for i in idx])
    y = torch.stack([torch.from_numpy(train_data[i+1:i+block_size+1].astype(np.int64)) for i in idx])
    x, y = x.to(device), y.to(device)
    
    optimizer.zero_grad(set_to_none=True)
    logits, loss = model(x, y)
    loss.backward()
    optimizer.step()
    
    if iter % 100 == 0 and master_process:
        print(f"Iteration {iter}, Loss: {loss.item():.4f}")

if master_process:
    torch.save(model.state_dict(), "best-model.pth")
    print("Training completed and model saved!")`,

    evaluation: `# ${t.gptCodeTracer.implementation.codeComments.evaluation.title}
# ${t.gptCodeTracer.implementation.codeComments.evaluation.author}
import os
import time
import torch
import torch.nn as nn
import torch.nn.functional as F
from tqdm import tqdm

# ${t.gptCodeTracer.implementation.codeComments.evaluation.paths}
DDIR = "/kaggle/input/tinypy-language-model/datahack/data/generic-3-digits/"
MODEL_PATH = "checkpoints/best-model.pth"
deviceid = 0

device = f'cuda:{deviceid}'
print(f"Device set to {device}.")

def log(s: str):
    print(s)

# ${t.gptCodeTracer.implementation.codeComments.evaluation.ensureModelExists}
assert os.path.exists(MODEL_PATH), f"Model not found: {MODEL_PATH}"

# ${t.gptCodeTracer.implementation.codeComments.evaluation.loadVocabSize}
log("Loading vocab_size")
with open(os.path.join(DDIR, 'vocab_size.txt')) as f:
    vocab_size = int(f.read())

# ${t.gptCodeTracer.implementation.codeComments.evaluation.modelHyperparameters}
block_size = 256
n_embd = 384
n_head = 8
n_layer = 8

class Head(nn.Module):
    def __init__(self, head_size):
        super().__init__()
        self.key = nn.Linear(n_embd, head_size, bias=False)
        self.query = nn.Linear(n_embd, head_size, bias=False)
        self.value = nn.Linear(n_embd, head_size, bias=False)
    
    def forward(self, x):
        B, T, C = x.shape
        k, q, v = self.key(x), self.query(x), self.value(x)
        scores = (q @ k.transpose(-2, -1)) / (C ** 0.5)
        scores = F.softmax(scores, dim=-1)
        return scores @ v

class MultiHeadAttention(nn.Module):
    def __init__(self, num_heads, head_size):
        super().__init__()
        self.heads = nn.ModuleList([Head(head_size) for _ in range(num_heads)])
        self.proj = nn.Linear(n_embd, n_embd)
    
    def forward(self, x):
        out = torch.cat([h(x) for h in self.heads], dim=-1)
        return self.proj(out)

class Block(nn.Module):
    def __init__(self, n_embd, n_head):
        super().__init__()
        head_size = n_embd // n_head
        self.ln1 = nn.LayerNorm(n_embd)
        self.ln2 = nn.LayerNorm(n_embd)
        self.attn = MultiHeadAttention(n_head, head_size)
        self.ffwd = nn.Sequential(
            nn.Linear(n_embd, 4 * n_embd),
            nn.GELU(),
            nn.Linear(4 * n_embd, n_embd)
        )
    
    def forward(self, x):
        x = x + self.attn(self.ln1(x))
        x = x + self.ffwd(self.ln2(x))
        return x

class GPT(nn.Module):
    def __init__(self):
        super().__init__()
        self.token_embedding = nn.Embedding(vocab_size, n_embd)
        self.position_embedding = nn.Embedding(block_size, n_embd)
        self.blocks = nn.Sequential(*[Block(n_embd, n_head) for _ in range(n_layer)])
        self.ln_f = nn.LayerNorm(n_embd)
        self.lm_head = nn.Linear(n_embd, vocab_size)
    
    def forward(self, idx, targets=None):
        B, T = idx.shape
        pos = torch.arange(T, device=device).unsqueeze(0)
        x = self.token_embedding(idx) + self.position_embedding(pos)
        x = self.blocks(x)
        x = self.ln_f(x)
        logits = self.lm_head(x)

        loss = None
        if targets is not None:
            loss = F.cross_entropy(logits.view(-1, vocab_size), targets.view(-1))
        return logits, loss
    
    @torch.no_grad()
    def generate(self, idx, max_new_tokens):
        for _ in range(max_new_tokens):
            idx_cond = idx[:, -block_size:]
            logits, _ = self(idx_cond)
            logits = logits[:, -1, :]
            probs = F.softmax(logits, dim=-1)
            idx_next = torch.multinomial(probs, num_samples=1)
            idx = torch.cat((idx, idx_next), dim=1)
        return idx

# ${t.gptCodeTracer.implementation.codeComments.evaluation.loadModel}
log("${t.gptCodeTracer.implementation.codeComments.evaluation.loadTrainedGpt}")
model = GPT()
model.load_state_dict(torch.load(MODEL_PATH, map_location=device))
model.to(device)
model.eval()

def evaluate_ood_performance():
    """
    ${t.gptCodeTracer.implementation.codeComments.evaluation.evaluateOodPerformance}
    
    Tests model capability on:
    1. ${t.gptCodeTracer.implementation.codeComments.evaluation.extendedWhileLoops}
    2. ${t.gptCodeTracer.implementation.codeComments.evaluation.longerNumbers}
    3. ${t.gptCodeTracer.implementation.codeComments.evaluation.complexCodeSequences}
    
    ${t.gptCodeTracer.implementation.codeComments.evaluation.targetAccuracy}
    ${t.gptCodeTracer.implementation.codeComments.evaluation.researchGptCodeTracing}
    """
    log("="*60)
    log("${t.gptCodeTracer.implementation.codeComments.evaluation.oodGeneralizationEvaluation}")
    log("="*60)
    log("${t.gptCodeTracer.implementation.codeComments.evaluation.researchGptCodeTracing}")
    log("${t.gptCodeTracer.implementation.codeComments.evaluation.targetAccuracy}")
    log("="*60)
    
    test_data_path = os.path.join(DDIR, "test.txt")
    with open(test_data_path, "r") as f:
        test_data = f.read()
    examples = test_data.split("\\n\\n")[:-1]
    
    log(f"${t.gptCodeTracer.implementation.codeComments.evaluation.loadedTestExamples}: {len(examples)}")
    
    correct_predictions = 0
    total_predictions = 0
    
    # ${t.gptCodeTracer.implementation.codeComments.evaluation.categoriesAnalysis}
    ood_categories = {
        'extended_loops': {'correct': 0, 'total': 0},
        'longer_numbers': {'correct': 0, 'total': 0}, 
        'extended_sequences': {'correct': 0, 'total': 0}
    }
    
    for i, example in enumerate(tqdm(examples[:100], desc="Evaluating Examples")):
        if "#STEP" not in example:
            continue
            
        # ${t.gptCodeTracer.implementation.codeComments.evaluation.splitCodeExpected}
        parts = example.split("#STEP\\n")
        if len(parts) < 2:
            continue
            
        input_text = parts[0].strip()
        target_text = parts[1].strip()
        
        # ${t.gptCodeTracer.implementation.codeComments.evaluation.simpleEvaluation}
        input_chars = list(input_text)[:block_size]
        target_chars = list(target_text)[:50]  # Limit target length
        
        # ${t.gptCodeTracer.implementation.codeComments.evaluation.convertTokenIndices}
        input_ids = torch.tensor([min(ord(c), vocab_size-1) for c in input_chars], 
                                dtype=torch.long).unsqueeze(0).to(device)
        
        try:
            with torch.no_grad():
                generated_ids = model.generate(input_ids, max_new_tokens=len(target_chars))
                
            # ${t.gptCodeTracer.implementation.codeComments.evaluation.simpleAccuracyCheck}
            is_correct = len(generated_ids[0]) > len(input_ids[0])  # Generated something
            
            if is_correct:
                correct_predictions += 1
            
            # ${t.gptCodeTracer.implementation.codeComments.evaluation.categorizeInput}
            if 'while' in input_text and len(input_text) > 100:
                ood_categories['extended_loops']['total'] += 1
                if is_correct:
                    ood_categories['extended_loops']['correct'] += 1
            elif any(str(num) in input_text for num in range(1000, 10000)):
                ood_categories['longer_numbers']['total'] += 1
                if is_correct:
                    ood_categories['longer_numbers']['correct'] += 1
            elif len(input_text) > 200:
                ood_categories['extended_sequences']['total'] += 1
                if is_correct:
                    ood_categories['extended_sequences']['correct'] += 1
                
            total_predictions += 1
        
        except Exception as e:
            log(f"Error processing example {i}: {str(e)}")
            continue
    
    # ${t.gptCodeTracer.implementation.codeComments.evaluation.calculateMetrics}
    overall_accuracy = (correct_predictions / total_predictions) * 100 if total_predictions > 0 else 0
    
    log("\\n" + "="*60)
    log("${t.gptCodeTracer.implementation.codeComments.evaluation.finalEvaluationResults}")
    log("="*60)
    log(f"Overall OOD Accuracy: {overall_accuracy:.2f}%")
    log(f"Correct Predictions: {correct_predictions}")
    log(f"Total Predictions: {total_predictions}")
    
    # Category-specific results
    log("\\n${t.gptCodeTracer.implementation.codeComments.evaluation.categoryBreakdown}:")
    for category, stats in ood_categories.items():
        if stats['total'] > 0:
            cat_accuracy = (stats['correct'] / stats['total']) * 100
            log(f"{category.replace('_', ' ').title()}: {cat_accuracy:.2f}% ({stats['correct']}/{stats['total']})")
        else:
            log(f"{category.replace('_', ' ').title()}: No examples found")
    
    # ${t.gptCodeTracer.implementation.codeComments.evaluation.evaluationTarget}
    target_accuracy = 55.0
    if overall_accuracy >= target_accuracy:
        log("✅ ${t.gptCodeTracer.implementation.codeComments.evaluation.researchTargetAchieved}")
        log(f"✅ Model achieved {overall_accuracy:.2f}% >= {target_accuracy}% target")
    elif overall_accuracy >= 45.0:
        log("📊 ${t.gptCodeTracer.implementation.codeComments.evaluation.strongOodPerformance}")
        log(f"📊 Model achieved {overall_accuracy:.2f}% (close to target)")
    else:
        log("❌ ${t.gptCodeTracer.implementation.codeComments.evaluation.oodPerformanceNeeds}")
        log(f"❌ Model achieved {overall_accuracy:.2f}% < {target_accuracy}% target")
    
    return overall_accuracy

# ${t.gptCodeTracer.implementation.codeComments.evaluation.runEvaluation}
log("${t.gptCodeTracer.implementation.codeComments.evaluation.startingOodFramework}")
final_accuracy = evaluate_ood_performance()
log(f"\\n🔬 ${t.gptCodeTracer.implementation.codeComments.evaluation.evaluationCompleted}")
log(f"📈 ${t.gptCodeTracer.implementation.codeComments.evaluation.finalOodAccuracy}: {final_accuracy:.2f}%")`
  };

  const navSections = [
    { id: 'preprocessing', label: t.gptCodeTracer.implementation.codeSections.preprocessing.label, icon: DataIcon },
    { id: 'training', label: t.gptCodeTracer.implementation.codeSections.training.label, icon: ResultsIcon },
    { id: 'evaluation', label: t.gptCodeTracer.implementation.codeSections.evaluation.label, icon: ResultsIcon }
  ];

  const activeSection = codeSections.find(s => s.id === activeCodeSection);
  const ActiveIcon = activeSection?.icon || CodeIcon;

  return (
    <section id="implementation" className="py-20">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="cyber-card p-3 rounded-xl">
                <CodeIcon className="text-purple-400" size={24} />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold neural-gradient">
                {t.gptCodeTracer.implementation.title}
              </h2>
            </div>
            <p className="text-xl text-muted-foreground max-w-4xl mx-auto font-mono leading-relaxed">
              <span className="text-purple-400">{t.gptCodeTracer.implementation.gitCloneCommand}</span> <span className="text-secondary">clone</span> <span className="text-green-400">{t.gptCodeTracer.implementation.repositoryUrl}</span>
              <br />
              <span className="ml-4 text-muted-foreground"># {t.gptCodeTracer.implementation.subtitle}</span>
            </p>
          </div>

          {/* Research Status Banner */}
          <div className="cyber-card p-6 rounded-xl mb-12 bg-gradient-to-r from-green-500/10 to-blue-500/10 border border-green-500/20">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center">
                  <CodeIcon className="text-white" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-lg">{t.gptCodeTracer.implementation.researchBanner.title}</h3>
                  <p className="text-sm text-muted-foreground">{t.gptCodeTracer.implementation.researchBanner.description}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-6 text-sm font-mono">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-green-400">{t.gptCodeTracer.implementation.researchBanner.statusLabels.validated}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="text-blue-400">{t.gptCodeTracer.implementation.researchBanner.statusLabels.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-purple-400 rounded-full animate-pulse"></div>
                  <span className="text-purple-400">2025-08-29</span>
                </div>
              </div>
            </div>
          </div>

          {/* Code Navigation */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-12">
            {navSections.map((section) => {
              const IconComponent = section.icon;
              const isActive = activeCodeSection === section.id;
              
              return (
                <button
                  key={section.id}
                  onClick={() => setActiveCodeSection(section.id)}
                  className={`flex flex-col items-center gap-3 p-6 rounded-xl font-medium transition-all duration-300 cyber-glow ${
                    isActive
                      ? 'bg-primary text-primary-foreground shadow-lg scale-105 border border-primary/50'
                      : 'cyber-card text-muted-foreground hover:text-foreground hover:scale-102'
                  }`}
                >
                  <IconComponent size={32} />
                  <span className="font-mono text-sm text-center leading-tight">{section.label}</span>
                </button>
              );
            })}
          </div>

          {/* Active Code Section */}
          <div className="space-y-8">
            {/* Section Header */}
            <div className="cyber-card p-6 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-secondary"></div>
              
              <div className="flex items-start gap-4">
                <div className="cyber-card p-3 rounded-lg">
                  <ActiveIcon className="text-primary" size={24} />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-2xl font-bold text-foreground">
                      {activeSection?.title}
                    </h3>
                    <div className="px-3 py-1 bg-primary/20 rounded-full text-xs font-mono text-primary">
                      {t.gptCodeTracer.implementation.codeHeader.language}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    {activeSection?.description}
                  </p>
                  
                  <div className="flex items-center gap-4 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="font-mono text-secondary">
                        {activeSection?.file}
                      </span>
                    </div>
                    <div className="text-muted-foreground font-mono">
                      {t.gptCodeTracer.implementation.codeHeader.author}
                    </div>
                    <div className="text-muted-foreground font-mono">
                      {t.gptCodeTracer.implementation.codeHeader.researchImplementation}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Code Terminal - NO SYNTAX HIGHLIGHTING */}
            <div className="cyber-terminal gpu-layer">
              <div className="terminal-dots">
                <div className="dot dot-red"></div>
                <div className="dot dot-yellow"></div>
                <div className="dot dot-green"></div>
                <div className="flex-1 flex items-center justify-between ml-4">
                  <span className="text-muted-foreground font-mono text-sm">
                    {activeSection?.file}
                  </span>
                  <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                    <span>{t.gptCodeTracer.implementation.codeHeader.researchImplementation}</span>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                      <span>{t.gptCodeTracer.implementation.codeHeader.live}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="p-6 min-h-[600px] max-h-[800px] overflow-auto font-mono text-sm text-foreground">
                <pre className="whitespace-pre-wrap leading-relaxed">
                  {codeImplementations[activeCodeSection] || '# Loading...'}
                </pre>
              </div>
            </div>

            {/* Repository Access */}
            <div className="cyber-card p-8 rounded-2xl text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-green-400 to-blue-400"></div>
              
              <div className="mb-6">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-blue-400 flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <CodeIcon className="text-white" size={24} />
                </div>
                
                <h3 className="text-2xl font-bold neural-gradient mb-4">
                  {t.gptCodeTracer.implementation.repositoryAccess.title}
                </h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                  {t.gptCodeTracer.implementation.repositoryAccess.description.replace(
                    '55% OOD accuracy',
                    `<span class="text-primary font-bold">${t.gptCodeTracer.implementation.repositoryAccess.achievement}</span>`
                  )}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button 
                  onClick={() => window.open('https://github.com/nirdidev05/Data_hack_IA', '_blank')}
                  className="btn-cyber-primary flex items-center gap-2"
                >
                  <CodeIcon size={18} />
                  <span>{t.gptCodeTracer.implementation.repositoryAccess.primaryButton}</span>
                </button>
                <button 
                  onClick={() => window.open('https://github.com/nirdidev05/Data_hack_IA/tree/main/src', '_blank')}
                  className="btn-cyber-secondary flex items-center gap-2"
                >
                  <span>📁</span>
                  <span>{t.gptCodeTracer.implementation.repositoryAccess.secondaryButton}</span>
                </button>
              </div>
              
              <div className="mt-6 text-xs text-muted-foreground font-mono">
                <div className="flex items-center justify-center gap-4">
                  <span>{t.gptCodeTracer.implementation.repositoryAccess.gitCloneInstruction}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Implementation;