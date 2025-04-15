<?php

namespace App\Filament\Resources;

use App\Filament\Resources\ArticleResource\Pages;
use App\Models\Article;
use Carbon\Carbon;
use Filament\Forms\Components\DateTimePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\RichEditor;
use Filament\Forms\Components\Select;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\BadgeColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;
use Filament\Tables\Actions\Action;
use Illuminate\Support\Str;


class ArticleResource extends Resource
{
    protected static ?string $model = Article::class;

    protected static ?string $navigationGroup = 'Production';
    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        return $form
        ->schema([
                FileUpload::make('thumbnail')->image()->directory("articles")->visibility("public")->disk("public")->maxSize(2054)->columnSpanFull() ,
                TextInput::make('title')
                ->required()
                ->afterStateUpdated(function ($state, callable $set) {
                    // Set slug dari title otomatis
                    $set('slug', Str::slug($state));
                })
                ->live(onBlur: true),


            TextInput::make('slug')
                ->required()
                ->unique(column: "id")
                ->readOnly(),
                Select::make('category_id')
                    ->relationship('category', 'name')
                    ->required(),
                    Select::make('author_id')
                    ->relationship('author', 'name')
                    ->required(),
                    RichEditor::make('content')->columnSpanFull(),
                Select::make('status')
                    ->options([
                        'draft' => 'Draft',
                        'published' => 'Published',
                        'archived' => 'Archived',
                    ])->default("draft"), // hanya bisa diubah lewat tombol aksi
                DateTimePicker::make('published_at') ->readOnly()// auto-update saat publish
            ]);
    }

    public static function table(Table $table): Table
    {
        return $table
            ->columns([
                TextColumn::make('No')->getStateUsing(
                    static function ($rowLoop, $livewire): string {
                        return (string) (
                            $rowLoop->iteration +
                            ($livewire->tableRecordsPerPage * (
                                $livewire->getPage() - 1
                            ))
                        );
                    }
                ),
                TextColumn::make('title')->searchable(),
                BadgeColumn::make('status'),
                TextColumn::make('published_at')->dateTime(),
            ])
            ->actions([
                Tables\Actions\EditAction::make(),

                Action::make('publish')
                    ->label('Publish')
                    ->visible(fn ($record) => $record->status === 'draft')
                    ->action(function ($record) {
                        $record->update([
                            'status' => 'published',
                            'published_at' => Carbon::now(),
                        ]);
                    })
                    ->icon('heroicon-o-paper-airplane')
                                        ->color('success'),

                Action::make('archive')
                    ->label('Archive')
                    ->visible(fn ($record) => $record->status === 'published')
                    ->icon('heroicon-o-archive-box')
                    ->action(function ($record) {
                        $record->update([
                            'status' => 'archived',
                        ]);
                    })
                    ->color('danger'),

                Action::make('draft')
                    ->label('Set Draft')
                    ->visible(fn ($record) => $record->status === 'published')
                    ->icon('heroicon-o-pencil-square')
                    ->action(function ($record) {
                        $record->update([
                            'status' => 'draft',
                            'published_at' => null,
                        ]);
                    })
                    ->color('gray'),
            ]);
    }
    public static function getRelations(): array
    {
        return [
            //
        ];
    }

    public static function getPages(): array
    {
        return [
            'index' => Pages\ListArticles::route('/'),
            'create' => Pages\CreateArticle::route('/create'),
            'edit' => Pages\EditArticle::route('/{record}/edit'),
        ];
    }
}
