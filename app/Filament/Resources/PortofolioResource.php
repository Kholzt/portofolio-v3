<?php

namespace App\Filament\Resources;

use App\Filament\Resources\PortofolioResource\Pages;
use App\Models\Portofolio;
use Filament\Forms;
use Filament\Forms\Components\DatePicker;
use Filament\Forms\Components\FileUpload;
use Filament\Forms\Components\Textarea;
use Filament\Forms\Components\TextInput;
use Filament\Forms\Form;
use Filament\Resources\Resource;
use Filament\Tables;
use Filament\Tables\Columns\Column;
use Filament\Tables\Columns\ImageColumn;
use Filament\Tables\Columns\TextColumn;
use Filament\Tables\Table;

class PortofolioResource extends Resource
{
    protected static ?string $model = Portofolio::class;

    protected static ?string $navigationIcon = 'heroicon-o-rectangle-stack';

    public static function form(Form $form): Form
    {
        // "title", "description", "thumbnail", "details", 'start_date', "end_date"
        return $form
            ->schema([
                TextInput::make('title')->required(),
                Textarea::make('description')->required(),
                FileUpload::make('thumbnail')->required()
                    ->image()
                    ->imagePreviewHeight("150") // Menampilkan preview gambar
                    ->visibility('public')
                    ->disk("public")
                    ->acceptedFileTypes(["image/*"])
                    ->directory("projek"),
                Textarea::make('details')->nullable(),
                DatePicker::make('start_date')->required(),
                DatePicker::make('end_date')->required(),
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
                ImageColumn::make("thumbnail")->searchable()->width(80)->height(50)->alignCenter(),
                TextColumn::make("title")->searchable(),
                TextColumn::make("start_date")->sortable(),
                TextColumn::make("end_date"),
            ])

            ->filters([
                //
            ])
            ->actions([
                Tables\Actions\EditAction::make(),
                Tables\Actions\DeleteAction::make(),

            ])
            ->bulkActions([
                Tables\Actions\BulkActionGroup::make([
                    Tables\Actions\DeleteBulkAction::make(),
                ]),
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
            'index' => Pages\ListPortofolios::route('/'),
            'create' => Pages\CreatePortofolio::route('/create'),
            'edit' => Pages\EditPortofolio::route('/{record}/edit'),
        ];
    }
}
